class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :color, :size, :stock, :user_id, :designer_id
  belongs_to :designer
  belongs_to :user
end
