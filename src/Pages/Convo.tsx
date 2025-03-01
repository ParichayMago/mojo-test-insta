import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";
import { plusPing } from "../assets/icons";

// Define types for conversation data
interface Conversation {
  id: string;
  updated_time: string;
  participant_name?: string;
  message_count?: number;
  last_message?: string;
  status?: "read" | "unread";
}

// Define API response type
interface ConversationResponse {
  success: boolean;
  convoList: {
    data: Conversation[];
  };
  error?: string;
}

// Dummy data for development and testing
const dummyConversations: Conversation[] = [
  {
    id: "123456789012345",
    updated_time: (Math.floor(Date.now() / 1000) - 3600).toString(), // 1 hour ago
    participant_name: "John Doe",
    message_count: 12,
    last_message: "Looking forward to hearing from you!",
    status: "unread",
  },
  {
    id: "987654321098765",
    updated_time: (Math.floor(Date.now() / 1000) - 86400).toString(), // 1 day ago
    participant_name: "Jane Smith",
    message_count: 8,
    last_message: "Thanks for the information.",
    status: "read",
  },
  {
    id: "456789012345678",
    updated_time: (Math.floor(Date.now() / 1000) - 172800).toString(), // 2 days ago
    participant_name: "Alex Johnson",
    message_count: 5,
    last_message: "I'll check and get back to you.",
    status: "read",
  },
  {
    id: "654321098765432",
    updated_time: (Math.floor(Date.now() / 1000) - 259200).toString(), // 3 days ago
    participant_name: "Sarah Williams",
    message_count: 20,
    last_message: "Perfect, that works for me!",
    status: "read",
  },
];

const ConvoPage: React.FC = () => {
  // Initialize conversations as an empty array
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [useDummyData, setUseDummyData] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (useDummyData) {
      // Use dummy data immediately
      setConversations(dummyConversations);
      setLoading(false);
      setError(null); // Clear any previous errors
    } else {
      // Fetch real data from API
      const fetchConversations = async () => {
        try {
          setLoading(true);
          setError(null); // Clear previous errors before fetching
          const token = localStorage.getItem("accessToken");

          if (!token) {
            navigate("/");
            return;
          }

          const response = await axios.get<ConversationResponse>(
            `/api/conversations/${token}`
          );

          if (response.data.success) {
            setConversations(response.data.convoList.data || []);
          } else {
            setError("Failed to load conversations");
          }
        } catch (err) {
          console.error("Error fetching conversations:", err);
          setError("An error occurred while fetching conversations");
        } finally {
          setLoading(false);
        }
      };

      fetchConversations();
    }
  }, [useDummyData, navigate]); // Re-run effect when useDummyData or navigate changes

  const formatDate = (timestamp: string): string => {
    const date = new Date(parseInt(timestamp) * 1000);
    return date.toLocaleString();
  };

  const toggleDummyData = () => {
    setUseDummyData((prev) => !prev); // Toggle the dummy data flag
  };

  return (
    <div className="w-screen min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-purple-400">
              Conversations
            </h1>
            <p className="text-gray-400">
              Your Instagram business conversations
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-400">Dev Mode:</span>
            <button
              onClick={toggleDummyData}
              className={`px-3 py-1 rounded text-xs ${
                useDummyData
                  ? "bg-green-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {useDummyData ? "Using Dummy Data" : "Use Real API"}
            </button>
          </div>
        </header>

        {loading ? (
          <Loading />
        ) : error ? (
          <div className="bg-red-900 text-red-200 p-4 rounded-lg">
            <p>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 px-4 py-2 bg-red-800 rounded hover:bg-red-700 transition"
            >
              Try Again
            </button>
          </div>
        ) : conversations.length === 0 ? (
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-xl text-gray-400">No conversations found</p>
            <p className="mt-2 text-gray-500">
              Start messaging your customers to see conversations here
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {conversations.map((convo) => (
              <div
                key={convo.id}
                className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition cursor-pointer border border-gray-700 hover:border-purple-500"
                onClick={() => navigate(`/conversation/${convo.id}`)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      <h2 className="font-medium text-white truncate">
                        {convo.participant_name ||
                          `Conversation ${convo.id.substring(0, 8)}...`}
                      </h2>
                      {convo.status === "unread" && (
                        <span className="ml-2 w-2 h-2 bg-purple-500 rounded-full"></span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                      Last updated: {formatDate(convo.updated_time)}
                    </p>
                    {convo.last_message && (
                      <p className="text-sm text-gray-300 mt-2 truncate">
                        {convo.last_message}
                      </p>
                    )}
                  </div>
                  <div className="bg-gray-700 p-2 rounded-full">
                    {plusPing}
                  </div>
                </div>
                {convo.message_count !== undefined && (
                  <div className="mt-2">
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                      {convo.message_count} messages
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConvoPage;
