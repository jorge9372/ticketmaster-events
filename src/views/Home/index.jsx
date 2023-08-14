import { useEffect, useState } from 'react';
import useEventsData from "../../hooks/useEventsData";
import Navbar from '../../components/Navbar';
import Events from '../../components/Events';
import ReactPaginate from 'react-paginate';

import styles from './Home.module.css';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { events, page, loading, error, fetchEvents } = useEventsData();

    useEffect(() => {
        fetchEvents();
    }, [])

    const handleNavbarSearch = (term) => {
        setSearchTerm(term);
        fetchEvents(`&keyword=${term}`)
    };

    const handlePageClick = ({ selected }) => {
        console.log(selected);
        fetchEvents(`&keyword=${searchTerm}&page=${selected}`);

    };

    const rendeEvents = () => {
        if (loading) {
            return <div>Cargando...</div>;
        }

        if (error) {
            return <div>Ha ocurrido un error</div>;
        }

        return (
            <div>

                < Events searchTerm={searchTerm} events={events} />
                <ReactPaginate
                    className={styles.pagination}
                    nextClassName={styles.next}
                    previousClassName={styles.previous}
                    pageClassName={styles.page}
                    activeClassName={styles.activePage}
                    disabledClassName={styles.disabledPage}
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={page.totalPages}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />

            </div>
        );
    }

    return (
        <>
            <Navbar onSearch={handleNavbarSearch} />
            {rendeEvents()}
        </>
    );
};

export default Home;