import authReducer from "../../reducers/auth";

test("Should set UID for login", () => {
    const action = {
        type: "LOGIN",
        uid: "abc123",
    };

    const state = authReducer({}, action);

    expect(state.uid).toBe("abc123");
});

test("Should clear UID for logout", () => {
    const action = {
        type: "LOGOUT",
    };
    const state = authReducer({ uid: "123abc" }, action);

    expect(state).toEqual({});
});
