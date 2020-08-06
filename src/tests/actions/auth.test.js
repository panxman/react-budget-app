import { login, logout } from "../../actions/auth";

test("Should generate Login Action Object", () => {
    const uid = "abc123"
    const action = login(uid);

    expect(action).toEqual({
        type: "LOGIN",
        uid
    });
});

test("Should generate Logout action object", () => {
    const action = logout();
    
    expect(action).toEqual({
        type: "LOGOUT"
    });
});
