import React from 'react'
import styled from 'styled-components'
import getGenres, { fetchMoviesByGenre } from '../store'
import { useDispatch } from 'react-redux'

export default function SelectGenres({genres, type}) {
    const dispatch = useDispatch()
  return (
    <Select className='text-black'
        onChange={(e)=>{
            // apres selection d'un genre la function est trigger and retrieve all movies of this genre
            dispatch(fetchMoviesByGenre({genre: e.target.value, type}))
        }}
    >
        {
            genres.map((genre)=>{
                return (
                    <option value={genre.id} key={genre.id}>{genre.name}</option>
                )
            })
        }
    </Select>
  )
}

const Select = styled.select`
    font-size: 18px;
    color: #ffffff;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
    background-color: rgba(0, 0, 0,.4);
    &:hover{
        background-color: rgba(0, 0, 0,.6);
    } 
`