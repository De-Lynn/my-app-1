import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1b0f8f71-06ff-49dc-8e94-f47a2fa55809"
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },

    follow (userId) {
        return instance.post(`follow/${userId}`, {})
        .then(response => response.data)
    },

    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/` + userId)
        .then(response => response.data)
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },

    updateStatus(newStatus) {
        return instance.put(`profile/status`, {status: newStatus,})
    }
}

export const authAPI = {
    getUserData () {
        return instance.get('auth/me')
        .then(response => response.data)
    },

    login (email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
        .then(response => response.data)
    },

    logout () {
        return instance.delete('auth/login')
        .then(response => response.data)
    },
}