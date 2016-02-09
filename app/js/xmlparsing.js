      



function test(name,id, marginLeft, marginTop, color  ){
        var v = new XMLWriter('UTF-8');
    
            v.writeStartDocument(true);
          v.writeStartElement('RelativeLayout');
            v.writeStartElement('Button');
            v.writeAttributeString('android:layout_width', 'wrap_content');
            v.writeAttributeString('android:layout_height', 'wrap_content');
            v.writeAttributeString('android:text', name );
            v.writeAttributeString('android:id',id );
            v.writeAttributeString('android:layout_alignParentTop','true');
            v.writeAttributeString('android:layout_alignParentLeft','true');
            v.writeAttributeString('android:layout_alignParentStart', 'true');
            v.writeAttributeString('android:layout_marginLeft', marginLeft);
            v.writeAttributeString('android:layout_marginStart',marginLeft);
            v.writeAttributeString('android:layout_marginTop', marginTop);
            v.writeAttributeString('android:background', color);
          v.writeEndElement();
          v.writeEndElement();
           
            v.writeEndDocument();
            console.log(v.flush());
            
        }

