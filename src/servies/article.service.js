import axiosClient from './axios-client';

export const articleService = {
    get: async (params) => {
        const stringParams = new URLSearchParams(params).toString();
        const response = await axiosClient.get(
            `/v1/home_article?${stringParams}`
        );
        return response;
    },
};
