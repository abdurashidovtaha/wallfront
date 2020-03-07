import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { galleryItemUpload } from '../../actions/actionCreators';
import styles from "./EditGalleryForm.module.css"

export default function EditGalleryForm() {
    const dispatch = useDispatch();
    const fileRef = useRef(null);
    const valRef = useRef(null);
    const { loading } = useSelector(state => state.storage.edit);

    const handleSubmit = evt => {
        evt.preventDefault();
    }
    const handleChange = () => {
        const [file] = Array.from(fileRef.current.files);
        if (file === undefined) {
            return;
        }
        console.log(file);
        valRef.current.value = file.name;
        setTimeout(() => {
            dispatch(galleryItemUpload(file));
            fileRef.current.value = "";
            valRef.current.value = "";
        }, 2000);
    }
    const handleSelect = () => {
        fileRef.current.click();//check what this does!
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1>Select file</h1>
                <input
                    ref={fileRef}
                    onChange={handleChange}
                    className={styles.file}
                    type="file"
                    accept="audio/*,image/*,video/*"
                />
                <input className={styles.select} type="text" ref={valRef} />
                <button className={styles.select} onClick={handleSelect}>
                    Select file
        </button>{" "}
                {loading && (
                    <div class="spinner-border text-dark" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                )}

            </form>
        </>
    )
}
