const mongoose = require('mongoose')

const {ObjectId, Number, Date, String} = mongoose.Schema.Types;

const walletTransferSchema = new mongoose.Schema({
  customer: {
    type: ObjectId,
    required: true,
    ref: 'User'
  },
  transactionType: {
    type: Number,
    default: 3, // 3-processing|2-pending|1-cancel_or_reject|0-success
  },
  transactionDate: {
    type: Date,
    default: Date.now(),
  },
  transactionAmount: {
    type: Number,
    required: true,
    default: 0,
  },
  transactionDetails: {
    type: String,
    required: true,
  },
  processBy: {
    type: ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  versionKey: false,
})

const WalletTransfer = mongoose.model('WalletTransfer', walletTransferSchema)
module.exports = WalletTransfer;
