// Simple async test for HTTP 200 response code using supertest
"use strict";

let chai = require("chai");
let chaiHttp = require("chai-http");

const { app, server } = require("../app");

// let app = require("../app");
let should = chai.should();

chai.use(chaiHttp);

describe("GET /", function () {
	it("expects HTTP response 200", function (done) {
		chai.request(app)
			.get("/")
			.end((err, res) => {
				res.should.have.status(200);
				server.close();
				done();
			});
	});
});
