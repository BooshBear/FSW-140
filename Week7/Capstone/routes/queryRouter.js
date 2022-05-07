const express = require('express');
const client = require('../modules/db');
const queryRouter = express.Router();

const currentYear = new Date().getFullYear();

queryRouter
    .get('/', (req, res) => {
        client.query(`SELECT name, year, notes FROM public.avengers WHERE current = 'YES'`, (err, result) => {
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
    .put('/:marvelName', (req, res) => {
        const marvelName = req.params.marvelName;
        console.log(marvelName);
        client.query(`UPDATE avengers 
        SET 
        url = '${req.body.url || null}',
        name = '${req.body.name || marvelName}',
        appearances = '${req.body.appearances || null}',
        current = '${req.body.current || null}',
        gender = '${req.body.gender || null}',
        probationaryintro = '${req.body.probationaryintro || null}',
        fullavengersintro = '${req.body.fullavengersintro || null}',
        year = '${req.body.year || null}',
        yearssincejoining = '${req.body.yearssincejoining || null}',
        honorary = '${req.body.honorary || null}',
        death1 = '${req.body.death1 || null}',
        return1 = '${req.body.return1 || null}',
        death2 = '${req.body.death2 || null}',
        return2 = '${req.body.return2 || null}',
        death3 = '${req.body.death3 || null}',
        return3 = '${req.body.return3 || null}',
        death4 = '${req.body.death4 || null}',
        return4 = '${req.body.return4 || null}',
        death5 = '${req.body.death5 || null}',
        return5 = '${req.body.return5 || null}',
        notes = '${req.body.notes || null}'
        WHERE name = '${marvelName}'`,
         (err, result) => {
            if(!err){
                return res.send(result.rows)
                } else {
                    console.log(err.message)
                }
            })
        client.end;
    })
    .delete('/:marvelName', (req, res) => {
        const marvelName = req.params.marvelName;
        console.log(marvelName);
        client.query(`DELETE FROM avengers WHERE name = '${marvelName}'`, (err, result) => {
            if(!err){
                return res.send(result.rows)
                } else {
                    console.log(err.message)
                }
            })
        client.end;
    })

module.exports = queryRouter;