import PropTypes from 'prop-types';
import Bookmark from './Bookmark';



const BookMarks = ({ bookMarks, readTime }) => {
    // console.log(bookMarks);
    return (
        <div className="md-1/3 mx-auto">
            <div>
                <h3>Reading Time:{readTime}</h3>
            </div>
            <h2 className="text-3xl text-center underline text-red-400"> bookmark Blogs : {bookMarks.length}</h2>
            {
                bookMarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

BookMarks.propTypes = {
    bookMarks: PropTypes.object.isRequired,
}

export default BookMarks;