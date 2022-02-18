class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    before_action :configure_permitted_parameters, if: :devise_controller?
  
    def configure_permitted_parameters
      # pass params for the sign up form
      devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :email, :password])
      # pass params for the sign in form
      devise_parameter_sanitizer.permit(:account_update, keys: [:username, :email, :password])
    end
  end