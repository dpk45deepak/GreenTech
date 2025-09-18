import React, { useState, useEffect, useRef } from 'react';
import { FiMic, FiSend, FiArrowLeft, FiSun, FiCloudRain, FiTrendingUp, FiHelpCircle, FiUser, FiMessageSquare } from 'react-icons/fi';

const VoiceAssistant = ({ onBack }) => {
    const [isListening, setIsListening] = useState(false);
    const [conversation, setConversation] = useState([
        {
            type: 'assistant',
            message: 'Hello! I\'m Krishi Bandhu, your farming assistant. How can I help you today?',
            timestamp: new Date()
        }
    ]);
    const [inputText, setInputText] = useState('');
    const [suggestions] = useState([
        "What's the weather forecast for this week?",
        "Tell me current market prices for wheat",
        "Which crops are best to plant this season?",
        "Explain the new government subsidy scheme",
        "How to manage pest in tomato crops?"
    ]);

    const chatEndRef = useRef(null);

    // Scroll to bottom of chat
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [conversation]);

    // Initialize speech recognition
    useEffect(() => {
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.lang = 'en-IN';
            recognition.interimResults = false;

            recognition.onstart = () => {
                setIsListening(true);
                addMessage('user', 'Listening...');
            };

            recognition.onresult = (event) => {
                const userCommand = event.results[0][0].transcript;
                addMessage('user', userCommand);
                processCommand(userCommand.toLowerCase());
            };

            recognition.onerror = (event) => {
                addMessage('error', `Error: ${event.error}`);
                setIsListening(false);
            };

            recognition.onend = () => {
                setIsListening(false);
            };

            window.recognition = recognition;
        } else {
            addMessage('error', 'Speech recognition is not supported in this browser.');
        }

        return () => {
            if (window.recognition) {
                window.recognition.stop();
            }
        };
    }, []);

    const addMessage = (type, message) => {
        setConversation(prev => [...prev, { type, message, timestamp: new Date() }]);
    };

    const startListening = () => {
        if (window.recognition) {
            window.recognition.start();
        }
    };

    const handleTextSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim()) {
            addMessage('user', inputText);
            processCommand(inputText.toLowerCase());
            setInputText('');
        }
    };

    const processCommand = (command) => {
        let response = '';

        if (command.includes('weather')) {
            response = "Today's weather is sunny with a high of 32°C and a low of 24°C. There's a 20% chance of rain in the evening. Perfect day for outdoor farming activities!";
        } else if (command.includes('market') || command.includes('price')) {
            response = "Current market prices: Wheat - ₹2,200/quintal, Rice - ₹1,800/quintal, Tomatoes - ₹40/kg, Potatoes - ₹20/kg. Prices are steady with a slight upward trend for wheat.";
        } else if (command.includes('crop') || command.includes('advice')) {
            response = "Based on current market trends and season, I recommend growing pulses like chickpeas or lentils. They have good demand, require less water, and are suitable for your region's soil conditions.";
        } else if (command.includes('government') || command.includes('scheme')) {
            response = "The government is currently offering a 75% subsidy on drip irrigation systems and a new crop insurance scheme with premiums as low as 2%. You can apply through the Krishi Mitra app or visit your local agricultural office.";
        } else if (command.includes('hello') || command.includes('hi')) {
            response = "Hello! I'm Krishi Bandhu, your farming assistant. I can help with weather information, market prices, crop advice, government schemes, and more. What would you like to know?";
        } else {
            response = "I'm not sure I understand. Try asking about weather, market prices, crop advice, or government schemes. You can also type 'help' for more options.";
        }

        // Simulate AI typing delay
        setTimeout(() => {
            addMessage('assistant', response);
            speak(response);
        }, 1000);
    };

    const speak = (text) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-IN';
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        addMessage('user', suggestion);
        processCommand(suggestion.toLowerCase());
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
            {/* Header */}
            <div className="bg-white shadow-sm py-4 px-4 flex items-center justify-between">
                <button
                    onClick={onBack}
                    className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
                >
                    <FiArrowLeft className="h-5 w-5 mr-1" />
                    Back
                </button>
                <h1 className="text-xl font-bold text-gray-800 flex items-center">
                    <FiMessageSquare className="mr-2 text-green-500" />
                    Krishi Bandhu Assistant
                </h1>
                <div className="w-8"></div> {/* Spacer for balance */}
            </div>

            <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full p-4">
                {/* Chat Container */}
                <div className="flex-1 bg-white rounded-xl shadow-md p-4 mb-4 overflow-y-auto max-h-[60vh]">
                    <div className="space-y-4">
                        {conversation.map((msg, index) => (
                            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-2xl p-4 ${msg.type === 'user' ? 'bg-green-100 text-gray-800' :
                                    msg.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-blue-50 text-gray-800'}`}>
                                    <div className="flex items-center mb-1">
                                        {msg.type === 'user' ? (
                                            <FiUser className="mr-2 text-green-600" />
                                        ) : msg.type === 'error' ? (
                                            <FiHelpCircle className="mr-2 text-red-600" />
                                        ) : (
                                            <FiMessageSquare className="mr-2 text-blue-600" />
                                        )}
                                        <span className="font-medium">
                                            {msg.type === 'user' ? 'You' : msg.type === 'error' ? 'Error' : 'Krishi Bandhu'}
                                        </span>
                                        <span className="text-xs text-gray-500 ml-2">
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                    <p>{msg.message}</p>
                                </div>
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>
                </div>

                {/* Suggestions */}
                <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Try asking:</h3>
                    <div className="flex flex-wrap gap-2">
                        {suggestions.map((suggestion, index) => (
                            <button
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="bg-white text-sm border border-gray-200 rounded-full px-4 py-2 hover:bg-gray-50 transition-colors"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Input Area */}
                <div className="bg-white rounded-xl shadow-md p-4">
                    <form onSubmit={handleTextSubmit} className="flex items-center">
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Type your question or tap the mic..."
                                className="w-full py-3 px-4 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full"
                            >
                                <FiSend className="h-4 w-4" />
                            </button>
                        </div>
                        <button
                            type="button"
                            onClick={startListening}
                            disabled={isListening}
                            className={`ml-3 p-3 rounded-full ${isListening ? 'bg-red-500 animate-pulse' : 'bg-green-500'} text-white`}
                        >
                            <FiMic className="h-6 w-6" />
                        </button>
                    </form>
                </div>

                {/* Quick Actions */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                    <button
                        onClick={() => handleSuggestionClick("What's the weather forecast?")}
                        className="bg-white p-3 rounded-xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-shadow"
                    >
                        <FiCloudRain className="text-2xl text-blue-500 mb-2" />
                        <span className="text-sm">Weather</span>
                    </button>
                    <button
                        onClick={() => handleSuggestionClick("Tell me market prices for wheat")}
                        className="bg-white p-3 rounded-xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-shadow"
                    >
                        <FiTrendingUp className="text-2xl text-green-500 mb-2" />
                        <span className="text-sm">Prices</span>
                    </button>
                    <button
                        onClick={() => handleSuggestionClick("Which crops to plant this season?")}
                        className="bg-white p-3 rounded-xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-shadow"
                    >
                        <FiSun className="text-2xl text-amber-500 mb-2" />
                        <span className="text-sm">Crop Advice</span>
                    </button>
                    <button
                        onClick={() => handleSuggestionClick("Government schemes for farmers")}
                        className="bg-white p-3 rounded-xl shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-shadow"
                    >
                        <FiHelpCircle className="text-2xl text-purple-500 mb-2" />
                        <span className="text-sm">Schemes</span>
                    </button>
                </div>
            </div>

            {/* Status Bar */}
            <div className="bg-white border-t border-gray-200 py-2 px-4 text-center text-xs text-gray-500">
                {isListening ? 'Listening...' : 'Ready to help'}
            </div>
        </div>
    );
};

export default VoiceAssistant;