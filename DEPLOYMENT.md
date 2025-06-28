# Deployment Guide for Garage Management System

This guide will help you deploy both the Rails backend API and React frontend on Render.

## Project Structure
```
Garage-Management-System/
├── app/                    # Rails backend
├── client/                 # React frontend
├── config/                 # Rails configuration
├── db/                     # Database files
├── render.yaml             # Render deployment configuration
└── bin/render-build.sh     # Build script for Rails
```

## Prerequisites

1. **Render Account**: Sign up at [render.com](https://render.com)
2. **GitHub Repository**: Your code should be in a GitHub repository
3. **Rails Master Key**: You'll need your Rails master key for production

## Step 1: Prepare Your Rails Master Key

1. Locate your `config/master.key` file in your Rails app
2. Copy the contents of this file - you'll need it for the deployment

## Step 2: Deploy Using Render Blueprint

### Option A: Using render.yaml (Recommended)

1. **Push your code to GitHub** with the `render.yaml` file
2. **Go to Render Dashboard** and click "New +"
3. **Select "Blueprint"** from the options
4. **Connect your GitHub repository**
5. **Render will automatically detect** the `render.yaml` file and create both services

### Option B: Manual Deployment

#### Deploy Rails Backend

1. **Create a new Web Service** on Render
2. **Connect your GitHub repository**
3. **Configure the service:**
   - **Name**: `garage-management-backend`
   - **Environment**: `Ruby`
   - **Build Command**: `bundle install`
   - **Start Command**: `bundle exec rails server -p $PORT -b 0.0.0.0`
   - **Root Directory**: Leave empty (root of repo)

4. **Add Environment Variables:**
   - `RAILS_ENV`: `production`
   - `RAILS_MASTER_KEY`: [Your master key from step 1]
   - `RAILS_LOG_TO_STDOUT`: `true`

5. **Create a PostgreSQL Database:**
   - Click "New +" → "PostgreSQL"
   - Name it `garage-management-db`
   - Copy the connection string
   - Add as environment variable: `DATABASE_URL`

#### Deploy React Frontend

1. **Create a new Static Site** on Render
2. **Connect your GitHub repository**
3. **Configure the service:**
   - **Name**: `garage-management-frontend`
   - **Build Command**: `cd client && npm install && npm run build`
   - **Publish Directory**: `client/build`
   - **Root Directory**: Leave empty

4. **Add Environment Variable:**
   - `REACT_APP_API_URL`: `https://your-backend-service-name.onrender.com`

## Step 3: Update Frontend API Configuration

The React app has been configured to use environment variables for API URLs. The `client/src/config.js` file will automatically use the production API URL when deployed.

## Step 4: Database Setup

After deployment, you'll need to run database migrations:

1. **Go to your Rails service** on Render
2. **Open the Shell** tab
3. **Run the following commands:**
   ```bash
   bundle exec rake db:create
   bundle exec rake db:migrate
   bundle exec rake db:seed  # if you have seed data
   ```

## Step 5: CORS Configuration

The Rails app includes `rack-cors` gem for handling CORS. Make sure your frontend domain is allowed in `config/initializers/cors.rb`.

## Environment Variables Summary

### Backend (Rails)
- `RAILS_ENV`: `production`
- `RAILS_MASTER_KEY`: Your Rails master key
- `DATABASE_URL`: PostgreSQL connection string (auto-generated)
- `RAILS_LOG_TO_STDOUT`: `true`

### Frontend (React)
- `REACT_APP_API_URL`: Your backend service URL

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check the build logs in Render
   - Ensure all dependencies are in `Gemfile` and `package.json`

2. **Database Connection Issues**
   - Verify `DATABASE_URL` is set correctly
   - Check if PostgreSQL service is running

3. **CORS Errors**
   - Update CORS configuration in Rails
   - Ensure frontend URL is in allowed origins

4. **API Connection Issues**
   - Verify `REACT_APP_API_URL` is set correctly
   - Check if backend service is running

### Useful Commands

```bash
# Check Rails logs
bundle exec rails logs:tail

# Run Rails console
bundle exec rails console

# Check database status
bundle exec rake db:status
```

## URLs After Deployment

- **Backend API**: `https://garage-management-backend.onrender.com`
- **Frontend**: `https://garage-management-frontend.onrender.com`

## Next Steps

1. **Set up custom domains** (optional)
2. **Configure SSL certificates** (automatic on Render)
3. **Set up monitoring and alerts**
4. **Configure backups** for your database

## Support

If you encounter issues:
1. Check Render's documentation
2. Review the build and runtime logs
3. Verify all environment variables are set correctly
4. Ensure your code works locally before deploying 