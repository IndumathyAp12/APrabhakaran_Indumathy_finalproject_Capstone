const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  principal: { type: Number, required: true },
  interestRate: { type: Number, required: true },
  term: { type: Number, required: true },
  monthlyPayment: { type: Number, required: true },
  totalPayment: { type: Number, required: true },
  totalInterest: { type: Number, required: true }
});


// Added Indexes :
loanSchema.index({ principal: 1 }); 

module.exports = mongoose.model('Loan', loanSchema);
