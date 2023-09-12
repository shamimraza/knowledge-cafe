import PropTypes from 'prop-types';
// import { FaBookmark } from 'react-icons/fa';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';

const Blog = ({ blog }) => {
    const { title, cover, author, author_img, reading_time, hashtags, posted_date
    } = blog
    console.log(blog);
    return (
        <div className='p-4'>
            <img className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mt-3'>
                <div className='flex ml-3'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-5'>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='mx-2 space-x-2'>
                    <span>{reading_time} min read</span>
                    {/* <button><FaBookmark></FaBookmark></button> */}
                    <button><BsFillBookmarkPlusFill></BsFillBookmarkPlusFill></button>
                </div>
            </div>
            <h3 className='mt-3 font-bold text-3xl'>{title}</h3>
            <p className='mt-2'>
                {
                    hashtags.map(has => <span key={has.id}><a href="">#{has}</a></span>)
                }
            </p>
            <a className='underline' href="">Mark as read</a>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;