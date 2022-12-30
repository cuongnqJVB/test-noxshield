/* eslint-disable @next/next/no-img-element */
export const EmptyData = () => {
    return (
        <div className="empty-page">
            <div className="empty__content">
                <img
                    className="w-48 sm:w-60 3xl:w-80"
                    src="/images/no-data.png"
                    alt="noxshield"
                />
                <h2 className='text-xl 3xl:text-2xl mb-3'>Không có dữ liệu hiển thị</h2>
                <p className='text-sm sm:text-base 3xl:text-lg text-center text-gray-500 mb-3'>
                    Vui lòng quay lại sau.
                </p>
            </div>
        </div>
    );
};
