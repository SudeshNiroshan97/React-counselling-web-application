import React from 'react';

function Medical(){

    return (
        <>
                    <h2 className="ct-font-secondary ct-font-lg">MEDICAL SUMMARY</h2>
                    <p className="ct-font-secondary">All patients'details </p>
                    <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th colSpan={4} scope="col">Question</th>
                        <th scope="col">Answer</th>
                        <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td colSpan={4}>Do you have any mental Issues?</td>
                        <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1">
                                YES
                            </label>
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1">
                                NO
                            </label>
                        </div>
                        </td>
                        <td>
                            <button className="btn ct-btn ct-warning">Update</button>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td colSpan={4}>Do you have any mental Issues?</td>
                        <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1">
                                YES
                            </label>
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1">
                                NO
                            </label>
                        </div>
                        </td>
                        <td>
                            <button className="btn ct-btn ct-warning">Update</button>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colSpan={4}>Do you have any mental Issues?</td>
                        <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1">
                                YES
                            </label>
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1">
                                NO
                            </label>
                        </div>
                        </td>
                        <td>
                            <button className="btn ct-btn ct-warning">Update</button>
                        </td>
                        </tr>
                        {/* Scalar Qs */}
                        <tr>
                        <th scope="row">4</th>
                        <td colSpan={4}>Do you have any mental Issues?</td>
                        <td>
                            <div className="ct-flex">

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label class="form-check-label" for="inlineRadio1">1</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label class="form-check-label" for="inlineRadio2">2</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled/>
                                    <label class="form-check-label" for="inlineRadio3">3</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled/>
                                    <label class="form-check-label" for="inlineRadio3">4</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled/>
                                    <label class="form-check-label" for="inlineRadio3">5</label>
                                </div>

                            </div>
                        </td>
                        <td>
                            <button className="btn ct-btn ct-warning">Update</button>
                        </td>
                        </tr>
                    </tbody>
                    </table>
        </>
    )
}

export default Medical;
