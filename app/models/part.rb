






class Part < ApplicationRecord
    belongs_to :vehicle, class_name: "Part", optional: true
end
