import React, { Component } from 'react';
import './Feed.css';
import SearchBox from '../../Components/SearchBox/SearchBox';
import Preview from '../../Components/Preview/Preview';
import AuthorList from '../../Components/AuthorList/AuthorList';
import { LocalConvenienceStoreOutlined } from '@material-ui/icons';

class Feed extends Component {
    constructor(){
        super();
        this.state = {
            isLoading : true,
            letter : '',
            searchField : '',
            authors : []
        }
    }

    async componentDidMount(){
        await fetch('https://fast-stream-91986.herokuapp.com/api/feed')
        .then(res => res.json())
        .then(data => {
            if(data.length > 0){
                this.setState((prevState) => ({
                    ...prevState,
                    authors : data
                }))
            }
        })
        this.state.authors.sort();
        let authors = this.state.authors.reduce((acc,curr) => {
            let letter = curr.DISTINCT[0].toUpperCase();
            if(!acc[letter]){
                acc[letter] = []
            }
            acc[letter].push(curr.DISTINCT);
            return acc;
        },{})
        this.setState({
            authors : authors,
            letter : 'A',
            isLoading : false
        })
        // console.log(this.state);
    }

    // async componentDidMount(){
    //     await fetch('http://localhost:3000/api/feed')
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.length > 0){
    //             this.setState((prevState) => ({
    //                 ...prevState,
    //                 authors : data
    //             }))
    //         }
    //     })
    //     this.state.authors.sort();
    //     let authors = this.state.authors.reduce((acc,curr) => {
    //         let letter = curr.DISTINCT[0].toUpperCase();
    //         if(!acc[letter]){
    //             acc[letter] = []
    //         }
    //         acc[letter].push(curr.DISTINCT);
    //         return acc;
    //     },{})
    //     this.setState({
    //         authors : authors,
    //         letter : 'A',
    //         isLoading : false
    //     })
    //     // console.log(this.state);
    // }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState((prevState) => ({
            ...prevState,  
            [name] : value
        }))
    }

    handleLetterChange = (event) => {
        const { value } = event.target;
        this.setState((prevState) => ({
            ...prevState,
            letter : value
        }))
        // console.log(this.state);
    }

    AZList = () => {
        let list = [];
        for(let i = 65; i <91; ++i){
            list.push(
                <button onClick={this.handleLetterChange} type='button' key={i} value={String.fromCharCode(i)}>{String.fromCharCode(i)}</button>
            )
        }
        return list;
    }

    authorList = () => {
        const { authors, letter } = this.state;
        let authorList = authors[letter.toString()];
        return <AuthorList authorList={authorList}/>
    }

    render(){
        const { isLoading } = this.state;
        return(
            <div className='feed'>
                <div className='feed-header'>
                    <div className='feed-header-title'>
                        <h3>FEED</h3>
                    </div>
                </div>
                {isLoading ? 
                    <h3>LOADING</h3>
                        :
                    <div className='feed-content'>
                        {/* <div className='feed-content-search'>
                            <h3 className='feed-content-search-header'>Search your favorite author</h3>
                            <div className='feed-content-searchbar'>
                                <SearchBox handleChange={this.handleChange}/>
                            </div>
                        </div> */}
                        <div className='feed-content-list'>
                            <div className='feed-content-list-option'>
                                <h3 className='feed-content-list-header'>Author List</h3>
                                <div className='feed-content-AZList'>
                                    {this.AZList()}
                                </div>
                            </div>
                            <div className='feed-content-list-option2'>
                                {this.authorList()}
                            </div>
                        </div>
                    </div> 
                }
            </div>
        );
    }
}

export default Feed;