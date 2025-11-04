import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PersonaState {
    personaIds: string[];
}

const initialState: PersonaState = {
    personaIds: [],
};

const personaSlice = createSlice({
    name: "persona",
    initialState,
    reducers: {
        setPersonaIds: (state, action: PayloadAction<string[]>) => {
            state.personaIds = action.payload;
        },
        addPersonaId: (state, action: PayloadAction<string>) => {
            if (!state.personaIds.includes(action.payload)) {
                state.personaIds.push(action.payload);
            }
        },
        removePersonaId: (state, action: PayloadAction<string>) => {
            state.personaIds = state.personaIds.filter(id => id !== action.payload);
        },
        clearPersonaIds: (state) => {
            state.personaIds = [];
        },
    },
});

export const { setPersonaIds, addPersonaId, removePersonaId, clearPersonaIds } = personaSlice.actions;
export default personaSlice.reducer;
