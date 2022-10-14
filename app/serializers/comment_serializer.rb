class CommentSerializer < ActiveModel::Serializer
  attributes :id, :commentor, :body
end
