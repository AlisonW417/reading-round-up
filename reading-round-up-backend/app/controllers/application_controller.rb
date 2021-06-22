class ApplicationController < ActionController::API
    helpers do 
        def current_user
            # mock version of logged in user
            User.first
        end 

        def logged_in?
            !!current_user
        end 
    end 

end
