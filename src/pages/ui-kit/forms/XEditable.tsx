import { ComponentContainerCard, PageBreadcrumb2 } from '@/components'
import { EditText, EditTextarea } from 'react-edit-text'
import 'react-edit-text/dist/index.css'

// Define the type for the parameter of handleSave
interface SaveProps {
	name: string
	value: string
}

const XEditable = () => {
	const handleSave = ({ name, value }: SaveProps) => {
		console.log(`${name}: ${value}`)
	}

	return (
		<>
			<PageBreadcrumb2 title="X Editable" appName="Forms" />
			<ComponentContainerCard
				title="Inline Example"
				description="This library allows you to create editable elements on your page. It can be used with any engine (bootstrap, jquery-ui, jquery only) and includes both popup and inline modes. Please try out demo to see how it works."
			>
				<table className="table table-striped mb-0">
					<thead>
					<tr>
						<th className="w-50">Inline</th>
						<th>Examples</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>Simple text field</td>
						<td>
							<EditText
								name="username"
								defaultValue="ni3galave"
								onSave={handleSave}
								style={{ border: '1px solid #ccc', padding: '5px' }}
							/>
						</td>
					</tr>
					<tr>
						<td>Empty text field, required</td>
						<td>
							<EditText
								name="username"
								onSave={handleSave}
								validationMessage="Required"
								validation={(value) => value.length > 0}
								style={{ border: '1px solid #ccc', padding: '5px' }}
							/>
						</td>
					</tr>
					<tr>
						<td>Simple textarea</td>
						<td>
							<EditTextarea
								name="description"
								defaultValue="Enter description"
								onSave={handleSave}
								style={{ border: '1px solid #ccc', padding: '5px' }}
							/>
						</td>
					</tr>

					<tr>
						<td>Simple checkbox list</td>
						<td>
							<EditText
								name="check"
								defaultValue="Mumbai, Nashik"
								onSave={handleSave}
								style={{ border: '1px solid #ccc', padding: '5px' }}
							/>
						</td>
					</tr>
					<tr>
						<td>Simple text field with disable</td>
						<td>
							<EditText
								name="username"
								defaultValue="ni3galave"
								onSave={handleSave}
								style={{ border: '1px solid #ccc', padding: '5px' }}
								readonly
							/>
						</td>
					</tr>
					</tbody>
				</table>
			</ComponentContainerCard>
		</>
	)
}

export default XEditable
