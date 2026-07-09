(function () {
  function filterPublicationsByTag(tag) {
    var items = document.querySelectorAll("#publication-list [data-tags]");
    var sections = document.querySelectorAll(".publication-category");
    var normalizedTag = tag && tag !== "all" ? tag : null;

    items.forEach(function (item) {
      var tags = item.getAttribute("data-tags").split(",");
      var visible = !normalizedTag || tags.indexOf(normalizedTag) !== -1;
      item.style.display = visible ? "" : "none";
    });

    sections.forEach(function (section) {
      var hasVisible = false;
      section.querySelectorAll("[data-tags]").forEach(function (item) {
        if (item.style.display !== "none") {
          hasVisible = true;
        }
      });
      section.style.display = hasVisible ? "" : "none";
    });

    document.querySelectorAll(".publication-tag-filter").forEach(function (link) {
      var linkTag = link.getAttribute("data-tag") || "all";
      var isActive = normalizedTag ? linkTag === normalizedTag : linkTag === "all";
      link.classList.toggle("is-active", isActive);
    });
  }

  function tagFromHash() {
    return window.location.hash ? window.location.hash.slice(1) : "all";
  }

  function initPublicationTagFilter() {
    var list = document.getElementById("publication-list");
    if (!list) {
      return;
    }

    document.addEventListener("click", function (event) {
      var link = event.target.closest(".publication-tag-filter");
      if (!link) {
        return;
      }

      event.preventDefault();
      var tag = link.getAttribute("data-tag") || "all";
      var path = window.location.pathname;
      var nextUrl = tag === "all" ? path : path + "#" + tag;
      history.replaceState(null, "", nextUrl);
      filterPublicationsByTag(tag);
    });

    window.addEventListener("hashchange", function () {
      filterPublicationsByTag(tagFromHash());
    });

    filterPublicationsByTag(tagFromHash());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPublicationTagFilter);
  } else {
    initPublicationTagFilter();
  }
})();
