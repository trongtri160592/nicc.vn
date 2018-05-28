# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# Disable plural table name
ActiveRecord::Base.pluralize_table_names = false