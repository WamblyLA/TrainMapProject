import React from 'react';
import styles from './Map.module.scss';

function Map(props) {
    return (
        <div className={styles["container"]}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d574687.491403919!2d37.44302339839632!3d55.76070811655821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sus!4v1729522132367!5m2!1sru!2sus"
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" className={styles["map"]} title="map"></iframe>
        </div>
    );
}

export default Map;