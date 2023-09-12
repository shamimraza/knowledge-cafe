import profile from '../../../src/assets/images/profile.png'

const Header = () => {
    return (
        <div className='mt-6 w-10/12 mx-auto'>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
                <img src={profile} alt="" />

            </div>
            <hr className='mt-4' />
        </div>
    );
};

export default Header;