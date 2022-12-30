import Link from 'next/link';

export const NotFound = () => {
    return (
        <div className="not-found-page">
            <div className='not-found__content'>
                <div className="notfound-404">
                    <h1 className='text-9xl lg:text-fs-186'>404</h1>
                </div>
                <h2 className='text-lg md:text-2xl lg:text-fs-26 mb-3'>Oops! Trang hiện không tồn tại</h2>
                <p className='text-sm md:text-base text-center md:text-left mb-3'>
                    Trang bạn đang tìm kiếm không tồn tại, bị xóa hoặc thông tin đã bị thay đổi.
                </p>
                <Link href="/">
                    <button className="bg-blue-1 text-white font-normal text-sm md:text-base py-2.5 px-4 hover:opacity-80 transition-all rounded">
                        Trở về trang chủ
                    </button>
                </Link>
            </div>
        </div>
    );
};
