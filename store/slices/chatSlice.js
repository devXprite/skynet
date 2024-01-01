import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    chats: [],
    previewPdf: false,
    isSending: false,
    error: null,
    isChatsLoading: false
};

const askQus = createAsyncThunk(
    "chats/askQus",
    async ({ query }, { dispatch, getState }) => {
        const state = getState();
        const selected = state.files.selected;

        const response = await axios.post(`thread/get_completion`, { thread_id: selected, query });
        // const response = { data: { id: '4343446', created_at: "2023-11-15T14:36:09.395Z", human_message: 'How are you?', ai_message: 'I am fine\n How are you?' } }

        dispatch(updatePdf(response?.data?.id || ''))
        return response.data;
    }
);

const fetchChats = createAsyncThunk(
    "chats/fetch",
    async (id) => {
        const response = await axios.get(`thread/${id}`);
        // const response = {
        //     data: [
        //         {
        //             "id": "ae1ba742-db2f-4fc3-91aa-3bcb52b96954",
        //             "created_at": "2023-11-16T08:07:59.667841",
        //             "human_message": "Expansion and Consolidation of British Power in India",
        //             "ai_message": "\n The text explains the expansion of British power in India and their relation with neighboring countries through conquests, diplomacy, and strategic annexations. However, it does not provide a specific context for the year 1860 or any notable event during that time."
        //         },
        //         {
        //             "id": "b7ce6e30-d327-4073-843a-a045a3f7ac42",
        //             "created_at": "2023-11-16T08:10:35.110485",
        //             "human_message": "British Power in India in min 500 char?",
        //             "ai_message": "\n Understanding the expansion of British power in India is essential. The crucial turning point was their victory over French forces at Wandiwash in 1760, leaving the English East India Company without a European rival. The British consolidated their power, engaging in conflicts with neighboring countries. This expansion began with their victory over Siraj-ud-daula at Plassey in 1757. The British continued to grow their influence in India and other aspects related to governance. In 1717, Mughal Emperor Farrukhsiyar granted significant privileges to the East India Company in Bengal, Gujarat, and Hyderabad via his farmans – often referred to as the 'Magna Carta of the East India Company.' These events shaped British rule in India until it finally ended in 1947."
        //         },
        //         {
        //             "id": "20b2e920-581f-4cbe-8c61-6796841b9f0e",
        //             "created_at": "2023-11-16T08:12:52.824446",
        //             "human_message": "test",
        //             "ai_message": "\n In the given context, no information is provided regarding bypassing common firewall restrictions using ports 80 and 443. Although ports 80 and 443 are commonly used for HTTP (80) and HTTPS (443) connections, the context does not directly mention techniques for bypassing firewall restrictions. It would be necessary to explore and test various means to overcome specific firewall limitations. Please provide more clarity regarding your question to narrow down the specific technique or methods you'd like to discuss."
        //         },
        //         {
        //             "id": "bb33761d-1d40-4154-a64f-9aa9fd1273be",
        //             "created_at": "2023-11-16T08:15:41.660126",
        //             "human_message": "test",
        //             "ai_message": "\n I understand your concern, but it is not provided in the material."
        //         }
        //     ]
        // };
        return response.data;
    }
);

const chatsSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {
        clearChats: (state) => {
            return initialState;
        },
        updatePdf: (state, action) => {
            state.previewPdf = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(askQus.pending, (state, action) => {
                state.isSending = true;
            })
            .addCase(askQus.fulfilled, (state, action) => {
                state.isSending = false;
                state.chats.push(action.payload);
            })
            .addCase(askQus.rejected, (state, action) => {
                state.isSending = false;
                state.error = action?.error?.message;
            });

        builder
            .addCase(fetchChats.pending, (state, action) => {
                state.isChatsLoading = true;
            })
            .addCase(fetchChats.fulfilled, (state, action) => {
                state.isChatsLoading = false;
                state.chats = action.payload;
                
                state.previewPdf = state.chats[state.chats.length - 1].id;
            })
            .addCase(fetchChats.rejected, (state, action) => {
                state.isChatsLoading = false;
            })

    }
});

export default chatsSlice.reducer;
export const { clearChats, updatePdf } = chatsSlice.actions;
export { askQus, fetchChats };