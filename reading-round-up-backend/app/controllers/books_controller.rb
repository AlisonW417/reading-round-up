class BooksController < ApplicationController
    def index 
        if logged_in? 
            @books = current.user.book
            render json: @books 
        else 
            render json: {
                message: "Log in to view books"
            }
        end
    end 
end
