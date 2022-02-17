$ rails new MoneyCat -d postgresql -T
$ cd MoneyCat
$ rails db:create
Add the remote from your GitHub classroom repository
Create a default branch (main)
Make an initial commit to the repository
$ bundle add rspec-rails
$ rails generate rspec:install
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ bundle add react-rails
$ rails webpacker:install:react
$ rails generate react:install
$ rails generate react:component App
$ rails generate controller Home
$ rails db:migrate
$ rails s


config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }


app/views/home/index.html.erb

<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>


config/routes.rb

Rails.application.routes.draw do
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end


config/initializers/devise.rb

# Find this line:
config.sign_out_via = :delete
# and replace it with this:
config.sign_out_via = :get





app/javascript/components/App.js

import React, { Component } from 'react'

class App extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return(
      <>
        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
      </>
    )
  }
}

export default App




