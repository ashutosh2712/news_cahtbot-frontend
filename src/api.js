import axios from "axios";

// Base URL for the FastAPI server (assuming it's running on localhost)
const BASE_URL = "http://localhost:8000";

// Fetch Articles from NewsAPI or Web Scraping
export const fetchArticles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/fetch-articles/`);
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

// Embed Articles using Pre-trained Model
export const embedArticles = async (articles) => {
  try {
    // Ensure the articles are structured correctly before sending
    const articlesData = articles.map((article) => ({
      title: article.title,
      content: article.content,
    }));

    const response = await axios.post(
      `${BASE_URL}/embed-articles/`,
      articlesData
    );
    return response.data.embeddings;
  } catch (error) {
    console.error("Error embedding articles:", error);
    throw error;
  }
};

// Insert Embeddings into Qdrant
export const insertEmbeddings = async (articles, embeddings) => {
  try {
    const response = await axios.post(`${BASE_URL}/insert-embeddings/`, {
      articles,
      embeddings,
    });
    return response.data.message;
  } catch (error) {
    console.error("Error inserting embeddings:", error);
    throw error;
  }
};

// Search for Relevant Articles based on User Query
export const searchRelevantArticles = async (query) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/search-relevant-articles/?query=${query}`
    );

    // Extracting both search results (articles) and final answer
    const { search_results, final_answer } = response.data;

    return { search_results, final_answer }; // Return both search results and the final answer
  } catch (error) {
    console.error("Error performing search:", error);
    throw error;
  }
};

export const fetchSessionId = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/start-session/`);
    return response.data.session_id;
  } catch (error) {
    console.error("Error fetching session ID:", error);
    throw error;
  }
};

export const fetchSessionHistory = async (sessionId) => {
  try {
    const response = await axios.get(`${BASE_URL}/get-history/${sessionId}`);
    return response.data.session_history;
  } catch (error) {
    console.error("Error fetching session history:", error);
    throw error;
  }
};

export const clearSession = async (sessionId) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/clear-session/${sessionId}`
    );
    return response.data.message;
  } catch (error) {
    console.error("Error clearing session:", error);
    throw error;
  }
};
