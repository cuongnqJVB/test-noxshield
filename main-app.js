// server.js
const express = require('express');
const next = require('next');
const url = require('url');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

function createServer() {
    const handle = app.getRequestHandler();
    const server = express();

    // Policy
    server.get('/chinh-sach-bao-mat', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        parsedUrl.query = { slug: 'chinh-sach-bao-mat' };
        parsedUrl.pathname = '/policy';
        handle(req, res, parsedUrl);
    });
    server.get('/chinh-sach-nguoi-dung', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        parsedUrl.query = { slug: 'chinh-sach-nguoi-dung' };
        parsedUrl.pathname = '/policy';
        handle(req, res, parsedUrl);
    });
    server.get('/chinh-sach-tra-hang', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        parsedUrl.query = { slug: 'chinh-sach-tra-hang' };
        parsedUrl.pathname = '/policy';
        handle(req, res, parsedUrl);
    });
    server.get('/chinh-sach-mua-hang', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        parsedUrl.query = { slug: 'chinh-sach-mua-hang' };
        parsedUrl.pathname = '/policy';
        handle(req, res, parsedUrl);
    });
    server.get('/chinh-sach-bao-hanh', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        parsedUrl.query = { slug: 'chinh-sach-bao-hanh' };
        parsedUrl.pathname = '/policy';
        handle(req, res, parsedUrl);
    });
    server.get('/dieu-khoan', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        parsedUrl.query = { slug: 'dieu-khoan' };
        parsedUrl.pathname = '/policy';
        handle(req, res, parsedUrl);
    });

    // Post
    server.get('/co-so-khoa-hoc-cua-noxshield', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        parsedUrl.query = { slug: 'co-so-khoa-hoc-cua-noxshield' };
        parsedUrl.pathname = '/category';
        handle(req, res, parsedUrl);
    });
    server.get('/cac-nhom-benh-nhan', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        parsedUrl.query = { slug: 'cac-nhom-benh-nhan' };
        parsedUrl.pathname = '/category';
        handle(req, res, parsedUrl);
    });
    server.get('/benh-nhan-co-he-mien-dich-yeu', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        parsedUrl.query = { slug: 'benh-nhan-co-he-mien-dich-yeu' };
        parsedUrl.pathname = '/category';
        handle(req, res, parsedUrl);
    });
    server.get('/benh-nhan-viem-xoang', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        parsedUrl.query = { slug: 'benh-nhan-viem-xoang' };
        parsedUrl.pathname = '/category';
        handle(req, res, parsedUrl);
    });
    server.get('/tre-em-bi-nhiem-sieu-vi', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        parsedUrl.query = { slug: 'tre-em-bi-nhiem-sieu-vi' };
        parsedUrl.pathname = '/category';
        handle(req, res, parsedUrl);
    });
    server.get('/benh-nhan-viem-mui-di-ung', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        parsedUrl.query = { slug: 'benh-nhan-viem-mui-di-ung' };
        parsedUrl.pathname = '/category';
        handle(req, res, parsedUrl);
    });
    server.get('/phu-nu-co-thai-bi-nhiem-sieu-vi', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        parsedUrl.query = { slug: 'phu-nu-co-thai-bi-nhiem-sieu-vi' };
        parsedUrl.pathname = '/category';
        handle(req, res, parsedUrl);
    });
    server.get('/benh-nhan-cum-mua', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        parsedUrl.query = { slug: 'benh-nhan-cum-mua' };
        parsedUrl.pathname = '/category';
        handle(req, res, parsedUrl);
    });
    server.get('/nhiem-sieu-vi-va-de-khang-khang-sinh', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        parsedUrl.query = { slug: 'nhiem-sieu-vi-va-de-khang-khang-sinh' };
        parsedUrl.pathname = '/category';
        handle(req, res, parsedUrl);
    });
    server.get('/cau-hoi-thuong-gap', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        parsedUrl.query = { slug: 'cau-hoi-thuong-gap' };
        parsedUrl.pathname = '/category';
        handle(req, res, parsedUrl);
    });

    // Article
    server.get('/:slug', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        parsedUrl.query = { slug: req.params.slug };
        parsedUrl.pathname = '/article';
        handle(req, res, parsedUrl);
    });

    // Home
    server.get('', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        parsedUrl.query = { slug: 'trang-chu' };
        parsedUrl.pathname = '/home';
        handle(req, res, parsedUrl);
    });

    server.get('*', (req, res) => {
        handle(req, res);
    });

    server.use((error, req, res, next) => {
        // res.redirect(REDIRECT_URL);
        res.json({ message: error.message });
    });

    return server;
}

const server = createServer(app);

exports.app = app;
exports.server = server;
