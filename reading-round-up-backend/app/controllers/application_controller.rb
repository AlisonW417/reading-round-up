class ApplicationController < ActionController::API
    def current_user
        # mock version of logged in user
        User.first
    end 

    def logged_in?
        !!current_user
    end 
end
