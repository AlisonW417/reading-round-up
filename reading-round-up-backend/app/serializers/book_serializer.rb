class BookSerializer
  include JSONAPI::Serializer
  attributes :title, :author, :genre, :date_finished, :notes, :id
end
