class SessionsController < ApplicationController

    def create
        @user = User.find_by(username: params[:session][:username])

        if @user && @user.authenticate(params[:session][:password])
            session[:user_id] = @user.id 
            render json: @user
        else 
            render json: {
                error: "Invalid Login Information"
            }
        end 
    end 

    def get_current_user
        if logged_in? 
            render json: current_user
        else 
            render json: {
                error: "No logged in users"
            }
        end 
    end 

    def destroy
        session.clear
        render json: {
            message: "Logged out"
        }
    end 

end 