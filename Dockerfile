# Base image: Ruby with necessary dependencies for Jekyll
FROM ruby:3.2

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    nodejs \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install bundler version matching Gemfile.lock
RUN gem install bundler:2.4.19

# Copy dependency files and install gems into the image
COPY Gemfile Gemfile.lock ./
RUN bundle config set --local path '/usr/local/bundle' && bundle install

# Expose port 4000 for Jekyll server
EXPOSE 4000

# Default command (overridden by docker-compose)
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--watch"]
