// services/passengers.service.js
"use strict";
module.exports = {
	name: "passengers",
	dependencies: ["suspects"],
	actions: {
		check: {
			rest: "/check",
			params: {
				name: "string",
				temperature: "number"
			},
			async handler(ctx) {
				let instructions = [];
				instructions.push(`Welcome, ${ctx.params.name}`);
				if (ctx.params.temperature >= 38) {
					ctx.emit("fever.detected", { name: ctx.params.name, temperature: ctx.params.temperature });
					instructions.push("You need medical assistance. Wait for the doctors.");
				}
				const suspect = await ctx.call("suspects.find", { query: { name: ctx.params.name } });
				if (suspect.length) {
					instructions.push("You are a suspect:");
					instructions.push(suspect);
					instructions.push("You can't travel. You are arrested!");
				}
				else
					instructions.push("Have a nice trip!");
				return instructions;
			}
		}
	},
};