class BookSerializer
  include JSONAPI::Serializer
  attributes :title, :author, :date_finished, :notes, :id
end
