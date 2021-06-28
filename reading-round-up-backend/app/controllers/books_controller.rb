class BooksController < ApplicationController
    def index 
        if logged_in? 
            @books = current_user.books
            render json: BookSerializer.new(@books).serializable_hash.to_json
        else 
            render json: {
                message: "Log in to view books"
            }
        end
    end 

    def create 
        @book = current_user.books.build(book_params) 
        if @book.save
            render json: BookSerializer.new(@book).serializable_hash.to_json
        else 
            response = {
                error: @book.errors.full_messages.to_sentence
            }
            render json: response
        end 
    end 

    def update 
        @book = Book.find(params[:id])
        if @book.update(book_params)
            render json: BookSerializer.new(@book).serializable_hash.to_json
        else 
            response = {
                error: @book.errors.full_messages.to_sentence
            }
            render json: response
        end 
    end 

    def destroy 
        @book = Book.find(params[:id])
        if @book.destroy 
            render json: {message: "Book successfully deleted"}
        end 
    end 

    private 
    def book_params
        params.require(:book).permit(:title, :author, :date_finished, :notes, :user_id)
    end 
end
