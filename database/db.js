var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/chihuo');//���������ݿ�
var Schema = mongoose.Schema;   //  ����ģ��
var userScheMa = new Schema({
    name: String,
    password: String
}); //  ������һ���µ�ģ�ͣ����Ǵ�ģʽ��δ��users�����й���
exports.user = db.model('users', userScheMa); //  ��users���Ϲ���