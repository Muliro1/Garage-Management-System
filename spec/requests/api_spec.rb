require 'swagger_helper'

RSpec.describe 'API', type: :request, swagger_doc: 'v1/swagger.json' do
  path '/api' do
    get 'Get API status' do
      tags 'API Status'
      produces 'application/json'
      
      response '200', 'API is running' do
        schema type: :object,
          properties: {
            message: { type: :string },
            version: { type: :string },
            status: { type: :string }
          }
        
        run_test!
      end
    end
  end

  path '/users' do
    get 'Get all users' do
      tags 'Users'
      produces 'application/json'
      
      response '200', 'users found' do
        run_test!
      end
    end

    post 'Create a user' do
      tags 'Users'
      consumes 'application/json'
      produces 'application/json'
      
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          user: {
            type: :object,
            properties: {
              name: { type: :string },
              email: { type: :string },
              password: { type: :string }
            },
            required: ['name', 'email', 'password']
          }
        }
      }
      
      response '201', 'user created' do
        run_test!
      end
      
      response '422', 'invalid request' do
        run_test!
      end
    end
  end

  path '/login' do
    post 'User login' do
      tags 'Authentication'
      consumes 'application/json'
      produces 'application/json'
      
      parameter name: :credentials, in: :body, schema: {
        type: :object,
        properties: {
          email: { type: :string },
          password: { type: :string }
        },
        required: ['email', 'password']
      }
      
      response '200', 'login successful' do
        run_test!
      end
      
      response '401', 'invalid credentials' do
        run_test!
      end
    end
  end

  path '/vehicles' do
    get 'Get all vehicles' do
      tags 'Vehicles'
      produces 'application/json'
      
      response '200', 'vehicles found' do
        run_test!
      end
    end

    post 'Create a vehicle' do
      tags 'Vehicles'
      consumes 'application/json'
      produces 'application/json'
      
      parameter name: :vehicle, in: :body, schema: {
        type: :object,
        properties: {
          vehicle: {
            type: :object,
            properties: {
              make: { type: :string },
              model: { type: :string },
              year: { type: :integer },
              license_plate: { type: :string }
            },
            required: ['make', 'model', 'year', 'license_plate']
          }
        }
      }
      
      response '201', 'vehicle created' do
        run_test!
      end
      
      response '422', 'invalid request' do
        run_test!
      end
    end
  end

  path '/admins/login' do
    post 'Admin login' do
      tags 'Admin Authentication'
      consumes 'application/json'
      produces 'application/json'
      
      parameter name: :credentials, in: :body, schema: {
        type: :object,
        properties: {
          email: { type: :string },
          password: { type: :string }
        },
        required: ['email', 'password']
      }
      
      response '200', 'login successful' do
        run_test!
      end
      
      response '401', 'invalid credentials' do
        run_test!
      end
    end
  end

  path '/technicians' do
    get 'Get all technicians' do
      tags 'Technicians'
      produces 'application/json'
      
      response '200', 'technicians found' do
        run_test!
      end
    end

    post 'Create a technician' do
      tags 'Technicians'
      consumes 'application/json'
      produces 'application/json'
      
      parameter name: :technician, in: :body, schema: {
        type: :object,
        properties: {
          technician: {
            type: :object,
            properties: {
              name: { type: :string },
              email: { type: :string },
              password: { type: :string },
              specialization: { type: :string }
            },
            required: ['name', 'email', 'password', 'specialization']
          }
        }
      }
      
      response '201', 'technician created' do
        run_test!
      end
      
      response '422', 'invalid request' do
        run_test!
      end
    end
  end
end 