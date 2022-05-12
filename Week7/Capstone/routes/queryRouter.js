const express = require('express');
const { Pool } = require('pg/lib');
const client = require('../modules/db');
const queryRouter = express.Router();

const currentYear = new Date().getFullYear();

queryRouter
    .get('/', (req, res) => {
        client.query(`SELECT _id, name, year, notes FROM public.avengers WHERE current = 'YES' ORDER BY _id ASC`, (err, result) => {
            if(!err){
                return res.send(result.rows)
                } else {
                    console.log(err.message)
                }
            })
        client.end;
    })
    .post('/', (req, res) => {
        console.log(req.body.name)
        client.query(`INSERT INTO avengers (name, notes, year, current) 
        VALUES('${req.body.name}', '${req.body.notes}', '${currentYear}','YES')`,
        (err, result) => {
            if(!err){
                return res.send(result.rows)
                } else {
                    console.log(err.message)
                }
            })
        client.end;
    })
    .put('/:marvelId', (req, res) => {
        const marvelId = req.params.marvelId;
        client.query(`UPDATE avengers 
        SET name = '${req.body.name}',
        year = ${req.body.year},
        notes = '${req.body.notes}'
        WHERE _id = ${marvelId}`,
         (err, result) => {
            if(!err){
                return res.send(result.rows)
            } else {
                console.log(err.message)
            }
            })
        client.end;
    })
    .delete('/:marvelId', (req, res) => {
        const marvelId = req.params.marvelId;
        client.query(`DELETE FROM avengers WHERE _id = ${marvelId}`, (err, result) => {
            if(!err){
                return res.send(result.rows)
                } else {
                    console.log(err.message)
                }
            })
        client.end;
    })

module.exports = queryRouter;