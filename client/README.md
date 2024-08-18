## Installation Instructions

To get FreshMart up and running on your local machine, follow these steps:

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)
- Firebase account
- Stripe account


### Frontend Setup

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Mh-Monzil/fresh-mart
    cd fresh-mart
    ```

2. **Navigate to the frontend directory:**
    ```sh
    cd client
    ```

3. **Install frontend dependencies:**
    ```sh
    npm install
    ```

4. **Set up environment variables:**
    Create a `.env` file in the `frontend` directory and add your environment variables:
    ```env
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
    ```

5. **Run the frontend development server:**
    ```sh
    npm start
    ```

### Backend Setup

1. **Install backend dependencies:**
    ```sh
    cd server
    npm install
    ```

2. **Set up environment variables:**
    Create a `.env` file in the `backend` directory and add your environment variables:
    ```env
    PORT=5000
    MONGO_DB_URI=your_mongodb_uri
    ```

3. **Run the backend server:**
    ```sh
    npm start
    ```


### Deploy

To deploy, follow the standard practices for deploying Node.js backend and React frontend applications. You can use services like Heroku, Vercel, Netlify, or Firebase Hosting.

---

Now, you should have FreshMart running locally on your machine.