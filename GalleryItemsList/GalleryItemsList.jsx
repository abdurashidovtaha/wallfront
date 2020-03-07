import React from 'react'
import { useDispatch } from 'react-redux'
import { galleryItemsListFetch } from '../actions/actionCreators';
import GalleryItem from '../components/GalleryItem/GalleryItem';

export default function GalleryItemsList({ items, loading, error }) {
    const dispatch = useDispatch();
    const handleRetry = () => {
        dispatch(galleryItemsListFetch());
    }

    function loadErrorItems() {
        if (loading) {
          return (
            <div className="center-loader">
              <div class="spinner-border text-dark" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          );
        }
        if (error) {
          return (
            <div class="alert alert-danger" role="alert">
              <span className="error-info">Error!</span>
              <button onClick={handleRetry}>retry</button>
            </div>
          );
        }
        return items.map(o => <GalleryItem key={o} item={o} />);
      }
      return <div className="container">{loadErrorItems()}</div>;
}
