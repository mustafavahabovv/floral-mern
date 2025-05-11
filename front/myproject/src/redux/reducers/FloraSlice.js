import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const getFloraThunk = createAsyncThunk('flora/getFlora', async () => { 
    const res = await axios.get('http://localhost:1000/floral')
    return res.data
})

const postFloraThunk = createAsyncThunk('flora/postFlora', async (data) => {
    const res = await axios.post('http://localhost:1000/floral', data)
    return res.data
})

const deleteFloraThunk = createAsyncThunk('flora/deleteFlora', async (id) => {
    const res = await axios.delete(`http://localhost:1000/floral/${id}`)
    return res.data
})

const FloraSlice = createSlice({
    name: 'flora',
    initialState: {
        flora: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFloraThunk.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getFloraThunk.fulfilled, (state, action) => {
            state.loading = false
            state.flora = action.payload
        })
        builder.addCase(getFloraThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        builder.addCase(postFloraThunk.fulfilled, (state, action) => {
            state.flora.push(action.payload)
        })
        builder.addCase(deleteFloraThunk.fulfilled, (state, action) => {
            state.flora = state.flora.filter((flora) => flora._id !== action.payload._id)
        })
    }
})

export { getFloraThunk, postFloraThunk, deleteFloraThunk }
export default FloraSlice.reducer