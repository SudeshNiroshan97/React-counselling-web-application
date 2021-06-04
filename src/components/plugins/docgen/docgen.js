import jsPDF from 'jspdf';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
import Title from '../../layout/title-container/title';
import appoint_service from '../../../services/appointment_service';
import './docgen.css';

function DocGen(){

    const {path, url} = useRouteMatch();
    const {room} = queryString.parse(window.location.search);

    const [appointment, setAppointment] = useState([]);
    // QUESTIONS 
    var [oeq1, setOEQ1] = useState(false);  var EQ1 = "Had any Treatments";
    var [oeq2, setOEQ2] = useState(false);  var EQ2 = "Has Depression or Anxiety";
    var [oeq3, setOEQ3] = useState(false);  var EQ3 = "Has LV3 Behaviours";
    var [oeq4, setOEQ4] = useState('');
    var [sca1, setSCA1] = useState(0);      var SC1 = "Patient's condition";
    var [sca2, setSCA2] = useState(0);      var SC2 = "Effectivness of the Session";

    var [result1, setResult1] = useState('Nothing');

    useEffect(() => {
        const looadAssets = async () => {
            setAppointment(await appoint_service.getAppoinment(room))
            console.log(appointment);
        }
        
        looadAssets();
    }, [])

    var lMargin=20; //left margin in mm
    var rMargin=20; //right margin in mm
    var pdfInMM=600;  // width of A4 in mm

    const generateSessionReport = (meetid, patient, expert) => {
        var gen = new jsPDF('p', 'pt');

        gen.rect(10, 10, gen.internal.pageSize.width - 20, gen.internal.pageSize.height - 20, 'S');

        // Content
        gen.setFontSize(25);
        gen.text(20, 40, "COUSILING SERVICE");

        gen.setFontSize(12);
        gen.text(20, 60, "Patient - " + patient + "\nExpert/Councillor - "+ expert + "\nMeeting ID - " + meetid);

        gen.setFontSize(11);
        var lines = gen.splitTextToSize("I am writing this letter on behalf of "+ patient + ", a patient of mine at Counsiling.com, in support of the person's claim for disability. Previously, this Person has attended "+ meetid +" on [This Date] and followings are the observed results of paticular patient.", (pdfInMM-lMargin-rMargin));
        gen.text(lMargin, 120, lines);

        gen.setFontSize(17);

        // gen.setFillColor(255,255,200);
        // gen.rect(100, 130, 40, 40, 'F');

        gen.setFontSize(12);
        gen.text(20, 160, "RESULTS");
        gen.setFontSize(11);
        lines = gen.splitTextToSize("\n"+EQ1+" \t- " + oeq1, (pdfInMM-lMargin-rMargin));
        gen.text(lMargin, 180, lines);
        gen.setFontSize(11);
        lines = gen.splitTextToSize("\n"+EQ2+" \t- " + oeq2, (pdfInMM-lMargin-rMargin));
        gen.text(lMargin, 190, lines);
        gen.setFontSize(11);
        lines = gen.splitTextToSize("\n"+EQ3+" \t- " + oeq3, (pdfInMM-lMargin-rMargin));
        gen.text(lMargin, 200, lines);
        gen.setFontSize(11);
        lines = gen.splitTextToSize("\n"+"Rate Patients condition 1 - Best to 5 - Worst"+" \t- " + sca1, (pdfInMM-lMargin-rMargin));
        gen.text(lMargin, 210, lines);

        gen.setFontSize(11);
        var lines = gen.splitTextToSize("\nComment:\n"+oeq4, (pdfInMM-lMargin-rMargin));
        gen.text(lMargin, 240, lines);



        // Save Doc
        gen.save("Doc_name.pdf");
    }

    
    return (
        <>
                <Title model={{ title: "Generate Document", path: ["Site 01"] }}/>

                <div className="user-records ct-cont-secondary">
                    <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th colSpan={4} scope="col">Question</th>
                        <th scope="col">Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td colSpan={4}>Does patient ever had any psychiatric treatment earlier?</td>
                        <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value={true} id="defaultCheck1" onChange={(event)=>setOEQ1(event.target.value)}/>
                            <label class="form-check-label" for="defaultCheck1">
                                YES
                            </label>
                            <input class="form-check-input" type="checkbox" value={false} id="defaultCheck1" onChange={(event)=>setOEQ1(event.target.value)}/>
                            <label class="form-check-label" for="defaultCheck1">
                                NO
                            </label>
                        </div>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td colSpan={4}>Does patient has depression or anxiety?</td>
                        <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value={true} id="defaultCheck1" onChange={(event)=>setOEQ2(event.target.value)}/>
                            <label class="form-check-label" for="defaultCheck1">
                                YES
                            </label>
                            <input class="form-check-input" type="checkbox" value={false} id="defaultCheck1" onChange={(event)=>setOEQ2(event.target.value)}/>
                            <label class="form-check-label" for="defaultCheck1">
                                NO
                            </label>
                        </div>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colSpan={4}>Does the patient has LV 3 behavioural effects?</td>
                        <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value={true} id="defaultCheck1" onChange={(event)=>setOEQ3(event.target.value)}/>
                            <label class="form-check-label" for="defaultCheck1">
                                YES
                            </label>
                            <input class="form-check-input" type="checkbox" value={false} id="defaultCheck1" onChange={(event)=>setOEQ3(event.target.value)}/>
                            <label class="form-check-label" for="defaultCheck1">
                                NO
                            </label>
                        </div>
                        </td>
                        </tr>
                        {/* Scalar Qs */}
                        <tr>
                        <th scope="row">4</th>
                        <td colSpan={4}>How's the patient's mental health condition? (1 - better 5 - worse)</td>
                        <td>
                            <div className="ct-flex">

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={1} onChange={(event)=>setSCA1(event.target.value)}/>
                                    <label class="form-check-label" for="inlineRadio1">1</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value={2} onChange={(event)=>setSCA1(event.target.value)}/>
                                    <label class="form-check-label" for="inlineRadio2">2</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value={3} onChange={(event)=>setSCA1(event.target.value)}/>
                                    <label class="form-check-label" for="inlineRadio3">3</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value={4} onChange={(event)=>setSCA1(event.target.value)}/>
                                    <label class="form-check-label" for="inlineRadio3">4</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value={5} onChange={(event)=>setSCA1(event.target.value)}/>
                                    <label class="form-check-label" for="inlineRadio3">5</label>
                                </div>

                            </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">5</th>
                        <td colSpan={4}>How's the effectiveness of the session? (1 - better 5 - worse)</td>
                        <td>
                        <div className="ct-flex">

                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio21" value={1} onChange={(event)=>setSCA2(event.target.value)}/>
                                <label class="form-check-label" for="inlineRadio21">1</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio22" value={2} onChange={(event)=>setSCA2(event.target.value)}/>
                                <label class="form-check-label" for="inlineRadio22">2</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio23" value={3} onChange={(event)=>setSCA2(event.target.value)}/>
                                <label class="form-check-label" for="inlineRadio23">3</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio24" value={4} onChange={(event)=>setSCA2(event.target.value)}/>
                                <label class="form-check-label" for="inlineRadio24">4</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio25" value={5} onChange={(event)=>setSCA2(event.target.value)}/>
                                <label class="form-check-label" for="inlineRadio25">5</label>
                            </div>

                        </div>
                        </td>
                        </tr>

                        <tr>
                        <th scope="row">6</th>
                        <td colSpan={4}>Comment on Session</td>
                        <td>
                        <div class="form-check">
                            <textarea class="form-check-input" id="inputcomment" onChange={(event)=>setOEQ4(event.target.value)}></textarea>
                            
                        </div>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    <button className="btn ct-btn ct-alternate" onClick={()=>generateSessionReport(room, appointment.user, appointment.expert)}>Generate</button>
                </div>
            
        </>
    )

}

export default DocGen;
