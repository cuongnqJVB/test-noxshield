import axiosClient from './axios-client';

export const postService = {
    get: async (params) => {
        const stringParams = new URLSearchParams(params).toString();
        const response = await axiosClient.get(`/v1/post?${stringParams}`);
        return response;
    },
    detail: async (postId) => {
        const response = await axiosClient.get(`/v1/post/${postId}`);
        return response;
    },
};
