# Pet Details App 🐾

Welcome to the **Pet Details App**, your go-to resource for discovering various pet breeds, their descriptions, and images.

## Features ✨

- **Responsive Design**: Enjoy a seamless experience across all devices, whether you're on desktop or mobile.
- **Scalable API Integration**: Built with scalability in mind, the app easily handles data from both The Cat API and Dog CEO's Dog API. Just like that, it can scale to any similar APIs!
- **Search & Pagination**: Quickly find your favorite breed with a user-friendly search function and navigate through results with intuitive pagination.
- **Agnostic Logging System**: Integrated with Winston, the app's logging mechanism is designed to be agnostic. This means it can seamlessly work with any logger library you choose to implement.
- **Error Handling**: Graceful error handling ensures a smooth user experience, even when things go wrong.

## Live Demo 🚀

Check out the live application deployed on Vercel: [Pet Details App](https://pet-details-app.vercel.app/)


## Getting Started 🛠️

To run this project locally:

```bash
git clone https://github.com/your-username/pet-details-app.git
cd pet-details-app
```

### API Key Setup 🔑

To run this project locally, you'll need an API key for The Cat API. Follow these steps:

1. **Get the API Key**:

   - Visit [The Cat API](https://thecatapi.com/) to sign up and obtain your API key.

2. **Store the API Key Locally**:
   - Create a `.env.local` file in the root of your project and add the `X_API_KEY` and save it.
   - Run the below:


```bash
npm install
npm run dev
```

## Unit Tests 🧪

The application includes unit tests to ensure the correctness of key functionalities. Tests cover components like `HomeHeader`, `Pagination`, and utility functions like `useFetch`.

## Screenshots 📸

### Logging Details from Vercel

<img width="1791" alt="image" src="https://github.com/user-attachments/assets/1f1f94b9-0848-4f8f-a42c-9a61e6e7c0ec">

## Future Enhancements 🌱

Add More APIs: The app is designed to be easily extensible, so integrating additional APIs is straightforward.
