import { Input, Space } from 'antd';
const { Search } = Input;

const SearchBox = (props) => {

    const onSearch = (value) => console.log(value);
    const searchButtonStyle = {
        width: '100%', 
        height: '100%', 
        padding: '0.5rem 1rem', 
    };

    const searchButton = (
        <button
            className="bg-sky-500 text-white text-center text-base rounded-e-md"
            style={searchButtonStyle} 
        >
            Search
        </button>
    );

    return (
        <div className='py-10 flex justify-center items-center'>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <Space direction="vertical">
                    <Search
                        placeholder={props.searchFor}
                        allowClear
                        enterButton={searchButton}
                        size="large"
                        onSearch={props.onSearch}
                    />
                </Space>
            </div>
        </div>
    );
};

export default SearchBox;
